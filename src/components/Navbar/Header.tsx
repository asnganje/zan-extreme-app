import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.div
      initial={{ y: '-100vh', opacity: 0 }}
      animate={{
        y: '0vh',
        opacity: 1,
      }}
      transition={{
        y: {
          duration: 3,
          ease: 'easeOut',
        },
        opacity: {
          duration: 1,
          ease: 'easeOut',
        },
      }}
    >
      <h3 className="hidden items-center justify-center flex-grow text-sm md:text-base text-blue-500">
        zanextremeholydays@gmail.com | +255 653 118 899
      </h3>
    </motion.div>
  );
}

export default Header;
