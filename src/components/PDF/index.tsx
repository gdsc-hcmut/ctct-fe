import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Document, Outline, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';

import './index.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useDebounce } from '../../hooks';
import Icon from '../Icon';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  httpHeaders: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || '{}')}`,
  },
};

interface PDFProps {
  url: string | URL;
  renderMode?: 'canvas' | 'svg' | 'none';
  className?: string;
  pageClassName?: string;
  title?: string;
}

const PDF: React.FC<PDFProps> = ({ url, renderMode, className, pageClassName }) => {
  const [numPages, setNumPages] = useState(1);
  const file = useMemo(() => ({ url: typeof url === 'string' ? new URL(url) : url }), [url]);
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState<number | undefined>();
  const [isShowOutline, setIsShowOutline] = useState(false);
  const [isShowTool, setIsShowTool] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);
  const canZoomIn = zoom < 2;
  const canZoomOut = zoom > 0.4;
  const timeRef = useRef<NodeJS.Timeout>();

  const handleOnMouseIn = (isIn: boolean) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    if (isIn) setIsMouseIn(true);
    else
      timeRef.current = setTimeout(() => {
        setIsMouseIn(false);
      }, 2000);
  };

  const onZoomIn = () => {
    if (canZoomIn) setZoom(zoom + 0.1);
  };

  const onZoomOut = () => {
    if (canZoomOut) setZoom(zoom - 0.1);
  };

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: any) => {
    setNumPages(nextNumPages);
  };
  const pdfWrapperRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<HTMLCanvasElement[]>([]);
  const outlineRef = useRef<HTMLDivElement>(null);

  const onItemClick = ({ pageNumber }: { pageNumber: string }) => {
    // console.log('>>> page click: ', pageNumber);
    pageRefs.current[parseInt(pageNumber)].scrollIntoView();
  };

  const setWrapperSize = () => {
    setWidth(pdfWrapperRef.current?.clientWidth);
  };

  const setTool = useDebounce(() => {
    setIsShowTool(false);
  }, 5000);

  const handleOnScroll = useCallback(() => {
    setIsShowTool(true);
    setTool();
  }, [setIsShowTool, setTool]);

  useEffect(() => {
    if (isShowOutline) {
      const closeOutline = (event: MouseEvent) => {
        if (outlineRef.current && !outlineRef.current.contains(event.target as Node)) {
          setIsShowOutline(false);
        }
      };
      setTimeout(() => {
        if (isShowOutline) {
          window.addEventListener('click', closeOutline);
        }
      }, 0);
      return () => window.removeEventListener('click', closeOutline);
    }
  }, [isShowOutline]);

  useEffect(() => {
    const element = document.getElementById('content-wrapper');
    window.addEventListener('resize', debounce(setWrapperSize, 700));
    element?.addEventListener('scroll', handleOnScroll);

    return () => {
      window.removeEventListener('scroll', handleOnScroll);
      element?.removeEventListener('resize', debounce(setWrapperSize, 700));
    };
  }, [handleOnScroll]);

  useEffect(() => {
    if (pdfWrapperRef.current) {
      setWrapperSize();
    }
  }, [pdfWrapperRef.current?.clientWidth]);

  return (
    <div
      id='pdfWrapperRef'
      className='flex w-full flex-col gap-y-1 text-xs font-medium text-white lg:text-sm 3xl:text-base'
      ref={pdfWrapperRef}
    >
      {width && (
        <Document
          className={`flex flex-row justify-between ${className || ''}`}
          options={options}
          renderMode={renderMode || 'svg'}
          error={<Skeleton baseColor='#9DCCFF' borderRadius={0} height='100vh' />}
          loading={<Skeleton baseColor='#9DCCFF' borderRadius={0} height='100vh' />}
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onItemClick={onItemClick}
        >
          <div ref={outlineRef}>
            <Outline
              onItemClick={onItemClick}
              className={`with-nav-height ${isShowOutline ? '' : 'hidden'}`}
              onLoadSuccess={(outline) => console.log('>> outline: ', outline)}
            />
          </div>
          <div
            className={`fixed bottom-0 left-[50%] z-10 flex translate-x-[-50%] translate-y-[-50%] flex-row justify-center gap-x-2 rounded-lg bg-[#4D4D4D] p-2 transition-all duration-200 ${
              isShowTool || isMouseIn ? 'opacity-100' : 'opacity-0'
            } xl:p-3`}
            onMouseEnter={() => handleOnMouseIn(true)}
            onMouseLeave={() => handleOnMouseIn(false)}
          >
            <button
              type='button'
              className='flex flex-1 items-center whitespace-nowrap rounded-lg p-1 text-white hover:bg-[#808080] lg:p-3 3xl:p-5'
              onClick={() => {
                setIsShowOutline(!isShowOutline);
              }}
            >
              {isShowOutline ? 'Ẩn' : 'Hiện'} mục lục
            </button>
            <button
              type='button'
              onClick={onZoomOut}
              className='rounded-lg p-1 text-[16px] text-white hover:bg-[#808080] md:text-[18px] lg:p-3 lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:p-5'
              disabled={zoom < 0.4}
            >
              <Icon.ZoomOutIcon fill='white' className='h-5 w-5 lg:h-6 lg:w-6 3xl:h-7 3xl:w-7' />
            </button>
            <span className='flex flex-1 justify-center rounded-lg bg-[#808080] p-1 lg:p-3 3xl:p-5'>{`${Math.floor(
              zoom * 100
            )}%`}</span>
            <button
              type='button'
              onClick={onZoomIn}
              className='rounded-lg p-1 text-[16px] text-white hover:bg-[#808080] md:text-[18px] lg:p-3 lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:p-5'
              disabled={zoom > 2}
            >
              <Icon.ZoomInIcon fill='white' className='h-5 w-5 lg:h-6 lg:w-6 3xl:h-7 3xl:w-7' />
            </button>
          </div>
          <div className='flex w-full flex-col items-center gap-y-1 lg:gap-y-2 2xl:gap-y-3'>
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                canvasRef={(el) => {
                  if (el) {
                    pageRefs.current[index + 1] = el;
                  }
                }}
                width={width * 0.8}
                className={pageClassName}
                loading={<Skeleton baseColor='#9DCCFF' borderRadius={0} height='100vh' />}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={true}
                renderInteractiveForms={false}
                renderMode='canvas'
                renderAnnotationLayer={false}
                scale={zoom}
              />
            ))}
          </div>
        </Document>
      )}
    </div>
  );
};

export default PDF;
