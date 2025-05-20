import styles from "./style.module.css";

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className={styles.ModalWrapper} onClick={onClose}>
      <div className={styles.ModalContent}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
