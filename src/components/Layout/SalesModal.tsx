import React, { useState, useEffect } from 'react';

const SalesModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if modal has already been closed during the session
    if (!sessionStorage.getItem('modalClosed')) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000); // 10 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    sessionStorage.setItem('modalClosed', 'true');
  };

  return (
    <>
      {showModal && (
        <div className="fixed z-[999] inset-0 bg-black bg-opacity-80 text-main flex justify-center items-center">
          <div className="bg-white p-12 shadow-lg text-left w-[90%] mx-auto max-w-3xl">
            <h2 className="text-4xl max-w-2xl font-bold mb-4">Få en gratis og uforpligtende performance analyse af din hjemmeside</h2>
            <p className="mb-4 text-lg">Lær hvordan du gratis kan fordoble salgene gennem din hjemmeside, og hermed få mest ud af din trafik.</p>
            <button
              onClick={closeModal}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SalesModal;
