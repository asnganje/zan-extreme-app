import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{
        x: '0vw',
        opacity: 1,
      }}
      transition={{
        x: {
          duration: 4,
          ease: 'linear',
        },
        opacity: {
          duration: 1,
          ease: 'easeOut',
        },
      }}
    >
      <h3 className="flex items-center justify-center flex-grow text-sm md:text-base md:justify-end text-blue-500">
        +254723663237 | zanextremeholydays@gmail.com
      </h3>
    </motion.div>
  );
}

export default Header;
