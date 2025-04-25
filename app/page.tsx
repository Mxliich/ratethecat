'use client';
import React, { useState } from 'react';

import Head from "next/head";
import RateTheCat from "@/components/rate-the-cat";
import { Button } from "@/components/ui/button";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Separator } from '@/components/ui/separator';
import logoPlaceholder from "@/public/placeholder-logo.png";
import QRCode from 'qrcode.react';


export default function Home() {
  const [showQrCode, setShowQrCode] = useState(false);
  const [selectedDonationMethod, setSelectedDonationMethod] = useState('');

  const handleDonateClick = (method: string) => {
    setSelectedDonationMethod(method);
    setShowQrCode(true);
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <footer className="fixed bottom-0 left-0 right-0 text-center p-4 bg-gray-100 border-t border-gray-200 z-50">
            <div className="flex justify-center items-center gap-4">
              <p>Support this nonesense</p>
              <Button size="sm" variant={"outline"}>
                Donate
              </Button>
            </div>
          </footer>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Donate</DialogTitle>
            <DialogDescription>
              Please choose a way to support us.
            </DialogDescription>
          </DialogHeader>
            {showQrCode ? (
              <div className="flex flex-col items-center justify-center space-y-4">
                <QRCode value={`https://example.com/donate/${selectedDonationMethod}`} size={256} level="H" />
                <p className="text-center">
                  Scan the QR code to proceed with your {selectedDonationMethod} donation.
                </p>
                 <Button className='w-full' onClick={() => {
                    window.open(`https://example.com/donate/${selectedDonationMethod}`, '_blank');
                }}
                >Donate</Button>
                <Separator/>
                <Button variant='outline' onClick={() => setShowQrCode(false)}>Go Back</Button>
              </div>
            ) : (
              <div className="grid gap-4 py-4">
                <div className="border rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-medium leading-none">
                        Donate via PayPal
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Support us using Paypal.
                      </p>
                    </div>
                    <Image
                      src={logoPlaceholder}
                      alt="Placeholder"
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                  </div>
                  <Button className="mt-4 w-full" onClick={() => handleDonateClick("paypal")}>
                    Donate with Paypal
                  </Button>
                </div>
                <div className="border rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-medium leading-none">
                        Buy us Coffee
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Support us using buy us coffe.
                      </p>
                    </div>
                    <Image
                      src={logoPlaceholder}
                      alt="Placeholder"
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                  </div>
                  <Button className="mt-4 w-full" onClick={() => handleDonateClick("coffee")}>
                    Buy us Coffee
                  </Button>
                </div>
              </div>
            )}
            


        </DialogContent>
      </Dialog>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Rate The Cat</title>
      </Head>

      <main className="h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-transparent opacity-70"></div>
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/30 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-200/30 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
        </div>

        <div className="w-full max-w-4xl relative z-10">
          <RateTheCat />
        </div>

        <BackgroundMusic />
      </main>
    </>
  );
}
