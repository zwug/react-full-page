import React from 'react';
import PropTypes from 'prop-types';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  zIndex: 5,
  backgroundColor: 'rgba(0,0,0,.5)',
  height: '100%',
  width: '100%',
};

const modalStyle = {
  padding: '15px',
  backgroundColor: 'rgba(255,255,255,.8)',
  maxHeight: '180px',
  overflowY: 'auto',
  margin: '30px auto',
  maxWidth: '300px',
  borderRadius: '8px',
};

const Modal = ({ onClose }) => (
  <div style={overlayStyle}>
    <div style={modalStyle}>
      <h2>Modal</h2>
      <div>
        Sometimes you have something above the slides
      </div>
      <hr />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eleifend risus, a elementum leo. Proin accumsan felis eget fermentum tristique. Donec ac nisl et metus malesuada posuere. Donec leo lorem, imperdiet non tempor imperdiet, maximus tempus turpis. Integer consequat, lacus et tempor efficitur, orci quam imperdiet mauris, vitae molestie velit dui ultrices ligula. Etiam quam dui, tempus sed iaculis vel, placerat eget felis. Vivamus vestibulum, lacus nec congue laoreet, magna leo accumsan eros, ac aliquet ante erat ac mauris. Nam id aliquet purus, et aliquam quam. Sed orci enim, commodo quis neque tempus, tempor finibus justo. Donec bibendum lorem id elit ornare semper.
        Aenean aliquam volutpat elit, non dictum nisl porta sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In turpis tellus, ornare vel neque nec, gravida vehicula dui. Etiam scelerisque sagittis eros, pulvinar imperdiet lectus varius sit amet. Integer luctus leo ac iaculis venenatis. Vivamus at ornare diam, nec convallis tortor. Aliquam neque dui, ultrices ac placerat eget, tempor id enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac congue ligula. Nullam elit risus, cursus eget tortor ut, ornare ultrices magna. Aenean venenatis ultrices dignissim. Proin orci sem, lacinia sit amet blandit at, egestas tristique libero. Curabitur varius, tellus eu congue rhoncus, tortor elit suscipit eros, mattis accumsan diam tortor in neque. Sed et elit lacus.
      </div>
      <button onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
