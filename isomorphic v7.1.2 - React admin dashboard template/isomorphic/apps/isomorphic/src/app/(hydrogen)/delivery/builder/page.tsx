'use client'

import PageHeader from '@/app/shared/page-header';
import PrintButton from '@/app/shared/print-button';
import { routes } from '@/config/routes';
import DeliveryBuilder from '@components/delivery-builder';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { Button } from 'rizzui';

const pageHeader = {
  title: 'Delivery Builder',
  breadcrumb: [
    {
      name: 'Home',
    },
    {
      name: 'Delivery',
    },
    {
      name: 'Builder',
    },
  ],
};

export default function DeliveryBuilderPage() {
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <PrintButton onClick={handlePrint} />
          <Button className="w-full @lg:w-auto">
            <PiDownloadSimpleBold className="me-1.5 h-[17px] w-[17px]" />
            Download
          </Button>
        </div>
      </PageHeader>
      <DeliveryBuilder printRef={printRef} />
    </>
  );
}
