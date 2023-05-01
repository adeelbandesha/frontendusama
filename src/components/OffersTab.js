import React from "react";
import { useState } from "react";
import CreateOfferModal from "./modals/CreateOfferModal";
import OffersTable from "./OffersTable";

export default function OffersTab() {
  const [openOffer, setOpenOffer] = useState(false);
  return (
    <>
      <div className="row bg-custom p-3">
        <div className="col-10">
          <h3>Offers</h3>
        </div>
        <div className="col-2">
          <button
            className="btn btn-info white"
            onClick={() => setOpenOffer(true)}
          >
            Create
          </button>
        </div>
      </div>
      <div className="mt-3" style={{overflow: 'scroll'}}>
        <OffersTable />
      </div>
      <CreateOfferModal show={openOffer} hide={setOpenOffer} />
    </>
  );
}
