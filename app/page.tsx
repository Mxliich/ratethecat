'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

function App() {
  const [showDonateDialog, setShowDonateDialog] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  const [selectedDonationMethod, setSelectedDonationMethod] = useState('');

  const handleDonateClick = () => {
    setShowDonateDialog(true);
  };

  const handleClose = () => {
    setShowDonateDialog(false);
    setShowQrCode(false);
  };

  const handleMethodSelect = (method: string) => {
    setSelectedDonationMethod(method);
    setShowQrCode(true);
  };

  const handleGoBack = () => {
    setShowQrCode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-xl mb-6">Rate The Cat App Content</p>
        <p>Start prompting (or editing) to see magic happen :)</p>
      </div>

      {/* Smaller Donation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 text-center py-2 px-4 bg-white/90 backdrop-blur-sm border-t border-gray-200 z-50 shadow-sm">
        <div className="flex justify-center items-center gap-3 text-sm">
          <p className="text-gray-600 font-medium">Support this nonsense</p>
          <button 
            onClick={handleDonateClick}
            className="px-4 py-1.5 text-sm font-medium text-white rounded-md shadow-sm
                     bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600
                     transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Donate
          </button>
        </div>
      </footer>

      {/* Donate Dialog */}
      {showDonateDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold text-lg">Donate</h3>
              <button 
                onClick={handleClose}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-gray-500 mb-4">Please choose a way to support us.</p>

              {showQrCode ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">QR Code for {selectedDonationMethod}</p>
                  </div>
                  <p className="text-center text-gray-600">
                    Scan the QR code to proceed with your {selectedDonationMethod} donation.
                  </p>
                  
                  <button 
                    className="w-full py-2.5 px-4 rounded-md font-medium text-white shadow-sm
                             bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600
                             transition-all duration-200 ease-in-out"
                    onClick={() => window.open(selectedDonationMethod === 'telda' ? 'https://telda.me/mar0nly' : 'https://vodafone.com', '_blank')}
                  >
                    Donate
                  </button>
                  
                  <div className="w-full h-px bg-gray-200 my-2"></div>
                  
                  <button 
                    className="w-full py-2.5 px-4 rounded-md font-medium text-gray-700 bg-white border border-gray-200
                             hover:bg-gray-50 transition-colors duration-200"
                    onClick={handleGoBack}
                  >
                    Go Back
                  </button>
                </div>
              ) : (
                <div className="grid gap-4 py-2">
                  <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col space-y-1">
                        <h3 className="font-medium leading-none">
                          Telda
                        </h3>
                        <p className="text-sm text-gray-500">
                          Support us using Telda.
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                    </div>
                    
                    <button 
                      className="mt-4 w-full py-2 px-4 rounded-md font-medium text-white shadow-sm
                               bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600
                               transition-all duration-200 ease-in-out"
                      onClick={() => handleMethodSelect("telda")}
                    >
                      Donate with Telda
                    </button>
                  </div>
                  
                  <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col space-y-1">
                        <h3 className="font-medium leading-none">Vodafone Cash</h3>
                        <p className="text-sm text-gray-500">Support us using Vodafone Cash.</p>
                      </div>
                      <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                    </div>
                    
                    <button 
                      className="mt-4 w-full py-2 px-4 rounded-md font-medium text-white shadow-sm
                               bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600
                               transition-all duration-200 ease-in-out"
                      onClick={() => handleMethodSelect("vodafone")}
                    >
                      Donate with Vodafone Cash
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
