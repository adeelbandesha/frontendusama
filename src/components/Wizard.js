import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import serviceInfo from "../assets/images/serviceInfo.png";
import ServiceInfo from "./modals/ServiceInfo";

const Wizard = ({
  children,
  data,
  furnished,
  unit,
  selecteds,
  selected,
  date,
  time,
  location,
  additionaldata,
}) => {
  console.log('data::: ', data, selected)
  const { category, subcategory } = useParams();
  const subCat = subcategory.split("-").join(" ");
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [showService, setShowService] = useState(false);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const page2Validations = useSelector((s) => s.services.step2Validations);
  const page3Validations = useSelector((s) => s.services.step3Validations);

  const goNextPage = () => {
    if (activePageIndex - 1 == -1) {
      setActivePageIndex((index) => index + 1);
    } else {
      if (activePageIndex - 1 == 0 && !page2Validations) {
        setActivePageIndex((index) => index + 1);
      }
      if (activePageIndex - 1 == 1 && !page3Validations) {
        setActivePageIndex((index) => index + 1);
      }
    }
  };
  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <button
        type="button"
        onClick={goNextPage}
        className="wizard__buttons-right"
      >
        Next
      </button>
    ) : null;

  return (
    <>
      <div className="container">
        <div className="row p-2">
          <div className="col-lg-7 col-12 wizard mt-2">
            <Stepper
              steps={[
                { label: "Scope" },
                { label: "Schedule" },
                { label: "Location" },
                { label: "Confirmation" },
              ]}
              activeStep={activePageIndex}
              // completedBgColor={"#FF800F"}
              // activeBgColor={"#FF800F"}
            />
            <div className="wizard__content">{currentPage}</div>
            <div className="wizard__buttons">
              <ButtonNext />
            </div>
          </div>
          <div className="col-12 col-lg-4 d-none d-md-block">
            <div className="wizard p-3">
              <div className="py-2 summary-heading">Booking Summary</div>
              <div className="py-3">
                <h6 className="primary">
                  {category} | {subCat}
                </h6>
                <div className="d-flex justify-content-between summary-type">
                  <p>Type</p>
                  <p>
                    <img
                      src={serviceInfo}
                      alt="service-info"
                      className="pointer"
                      onClick={() => setShowService(true)}
                    />
                    {data?.onSurvey
                      ? "Survey based service"
                      : "Inspection based service"}
                  </p>
                </div>
                <div>
                  <p className="primary py-2 bottom-border">Details</p>
                </div>
                <div className="d-flex justify-content-between summary-type">
                  <p>{data?.reason}</p>
                  <p className="fw-bold">{selected}</p>
                </div>

                {/* <div className="checkboxss ">
                <span> Location : {location} </span>
               </div> */}

                <div className="d-flex justify-content-between summary-type">
                  <p>{data?.uni}</p>
                  <p className="fw-bold">{selecteds}</p>
                </div>

                {/* <div className="d-flex justify-content-between summary-type">
                  <p>{data?.unit}</p>
                  <p className="fw-bold">{unit}</p>
                </div> */}
                <div className="d-flex justify-content-between summary-type">
                  <p>{data?.additional}</p>
                  <p className="fw-bold">{furnished ? "Yes" : "No"}</p>
                </div>
                {date && (
                  <>
                    <div>
                      <p className="primary py-2 bottom-border">Schedule</p>
                    </div>
                    <div className="d-flex justify-content-between summary-type">
                      <p>Date</p>
                      <p className="fw-bold">{date}</p>
                    </div>
                  </>
                )}
                {time && (
                  <div className="d-flex justify-content-between summary-type">
                    <p>Time</p>
                    <p className="fw-bold">{time}</p>
                  </div>
                )}
              </div>
              <div>
                <p primary py-2 bottom-border>
                  Price Total 
                </p>
              </div>
              <div>
                <p>${selected && selected.includes('1') && data.prz || selected && selected.includes('2') && data.prz*2 || selected && selected.includes('3') && data.prz*3 || selected && selected.includes('4') && data.prz*4 || selected && selected.includes('5') && data.prz*5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceInfo show={showService} hide={setShowService} />
    </>
  );
};

export default Wizard;
