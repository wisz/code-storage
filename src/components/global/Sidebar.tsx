import clsx from 'clsx';
import { motion } from 'framer-motion';

// hooks
import useTheme from '../../hooks/context/useTheme';

// components
import Navigation from './Navigation';

type Props = {};

const sidebarSizes = {
  nav: 80,
  content: 240,
  total: 320,
  arrowSize: 40,
};

const Sidebar = (props: Props) => {
  const { sidebarOpen } = useTheme();

  const animations = {
    sidebar: {
      hidden: { maxWidth: 0, opacity: 0 },
      visible: { maxWidth: sidebarSizes.content, opacity: 1 },
    },
    content: {
      hidden: { opacity: 0, transition: { duration: 0.1, delay: 0 } },
      visible: { opacity: 1, transition: { delay: 0.2 } },
    },
  };

  return (
    <motion.div
      initial={{ maxWidth: sidebarSizes.nav }}
      animate={{ maxWidth: sidebarOpen ? sidebarSizes.total : sidebarSizes.nav }}
      className='relative w-full h-full flex-shrink-0 z-10 bg-theme-sidebar'
    >
      <motion.div
        initial={{ maxWidth: sidebarSizes.nav }}
        animate={{ maxWidth: sidebarOpen ? sidebarSizes.total : sidebarSizes.nav }}
        className='fixed flex h-full divide-x divide-theme-divider'
      >
        <Navigation />

        <motion.div
          variants={animations.sidebar}
          initial='hidden'
          animate={sidebarOpen ? 'visible' : 'hidden'}
          className={clsx('p-5 w-full h-full', !sidebarOpen && 'pointer-events-none')}
        >
          <motion.div variants={animations.content} initial='hidden' animate={sidebarOpen ? 'visible' : 'hidden'}>
            Sidebar content will go here
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
