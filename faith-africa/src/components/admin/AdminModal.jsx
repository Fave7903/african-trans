import React from 'react';
import Modal from '../Modal';

/** @param {{ open: boolean, onClose: () => void, title: string, children: React.ReactNode, wide?: boolean }} props */
const AdminModal = ({ open, onClose, title, children, wide }) => (
  <Modal isOpen={open} onClose={onClose}>
    <div className={wide ? 'max-h-[80vh] overflow-y-auto' : ''}>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  </Modal>
);

export default AdminModal;
