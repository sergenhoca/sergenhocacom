import "./whatsapp.css";
import { motion } from "framer-motion";

const Whatsapp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=905533245772&text=Merhaba,%20Web%20sitenizden%20ulaşıyorum;%20"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </motion.div>
  );
};

export default Whatsapp;
