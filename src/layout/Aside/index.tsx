import { ReactNode, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Icon } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppAction } from '../../slices/app';

interface AsideProps {
  title?: string;
  subTitle?: string;
  description?: string;
  children?: ReactNode;
}

const Aside: React.FC<AsideProps> = ({ title, subTitle, description, children }) => {
  const { isAsideOpen } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const params = useParams();
  const asideRef = useRef(null);

  return (
    <>
      {/* Aside */}
      <aside
        ref={asideRef}
        className={`with-nav-height fixed z-10 bg-white ${
          params?.subjectId ? 'translate-x-[-100%]' : ''
        } ${
          !isAsideOpen ? 'md:translate-x-[-100%]' : 'md:translate-x-0'
        } w-full overflow-y-scroll transition-all duration-300 md:w-[264px] lg:w-[332px] xl:w-[400px] 3xl:w-[500px]`}
      >
        <div className='flex items-center px-5 py-5'>
          <div className='h-full w-full space-y-6'>
            {/* Title */}
            {title && (
              <span>
                <h1 className='block text-2xl font-bold text-[#4285F4] transition duration-300 md:hidden'>
                  {title}
                </h1>
                <p className='block text-[#252641] transition duration-300 md:hidden'>
                  {description}
                </p>
              </span>
            )}

            {/* Sub-title */}
            {subTitle && (
              <div className='hidden flex-row items-center justify-between md:flex'>
                <h2
                  className='md:text-md hidden font-semibold transition duration-300 
                md:block lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl'
                >
                  {subTitle}
                </h2>
              </div>
            )}

            {/* Children */}
            {children}
          </div>
        </div>
      </aside>

      {/* Collapse Button */}
      <button
        id='collapse-button'
        type='button'
        onClick={() => {
          dispatch(AppAction.toggleAside());
        }}
        className={`fixed top-[50%] z-10 hidden rounded-r-xl bg-white md:block ${
          isAsideOpen
            ? '3xl:translate-w-[500px] md:translate-x-[264px] lg:translate-x-[332px] xl:translate-x-[400px] '
            : 'translate-x-0'
        } py-10 px-2 opacity-80 transition-all duration-300`}
      >
        <Icon.ChevronUp
          fill={'#5B5B5B'}
          fillOpacity={0.87}
          className={`aspect-[10/7] h-full w-auto ${isAsideOpen ? 'rotate-[-90deg]' : 'rotate-90'}`}
        />
      </button>
    </>
  );
};

export default Aside;