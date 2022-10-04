import React from "react";
import style from "./OrderPage.module.scss";
import Checkbox from "../../components/Checkbox";
import Label from "../../components/LabelInput";
import clsx from "clsx";
import Label2 from "../../components/LabelInput/index2";
import Label3 from "../../components/LabelInput/index3";
import Button from "../../components/Button";
import { useEffect } from "react";

const OrderPages = () => {
  const classes1 = clsx(style.wrapInformation, style.wrapInformation2);
  const classes2 = clsx(style.containerFluid, style.colorf2);
  const classes3 = clsx(style.wrapInformation, style.pickUpRequestime);
  useEffect(() => {
    document.querySelector(".wrapper").classList.add("fixWidth");
  }, []);
  return (
    <div className={style.container}>
      <h2>EDIT ORDER</h2>
      <div className={style.orderWrap}>
        <div className={style.checkBoxWrap}>
          <Checkbox title="In house" />
          <Checkbox title="On-Demand Delivery" />
          <Checkbox title="Shipping" />
        </div>
        <h3>Patient Information</h3>
        <div className={style.containerFluid}>
          <div className={style.wrapInformation}>
            <Label title="Phone Number" type="number" />
            <Label title="First Name" type="text" />
            <Label title="Last Name" type="text" />
          </div>
          <div className={classes1}>
            <Label title="Adress" type="text" width="" />
            <Label title="First Name" type="text" placeholder="--" />
          </div>
          <Checkbox title="Patient opts out of delivery status text message notifications." />
        </div>
        <h3>Pharmacy Information</h3>
        <div className={classes2}>
          <div className={style.wrapInformation}>
            <Label title="Store Name" type="text" />
            <Label
              title="NPI"
              type="number"
              src="./images/Vector.svg"
              is_active="active"
            />
          </div>
        </div>
        <h3>Delivery Details</h3>
        <div className={style.containerFluid}>
          <h3>Medication Info</h3>

          <div className={style.wrapInformation}>
            <Label title="Medication Name" type="text" />
            <Label title="Prescription Number (optional)" type="text" />
            <Label title="Quantity" type="number" />
            <Label title="Copayment ($)" type="number" />
            <div className={style.medicationImg}>
              <img src="/images/garbage.svg" alt="#" />
            </div>
          </div>

          <div className={style.wrapInformation}>
            <Label title="Medication Name" type="text" />
            <Label title="Prescription Number (optional)" type="text" />
            <Label title="Quantity" type="number" />
            <Label title="Copayment ($)" type="number" />
            <div className={style.medicationImg}>
              <img src="/images/plus.svg" alt="#" />
            </div>
          </div>
          <div className={style.wrapInformation}>
            <Label title="Note" type="text" />
          </div>
          <div className={style.checkboxItemMedication}>
            <Checkbox title="Contains controlled medications." />
          </div>
          <div className={style.checkboxItemMedication}>
            <Checkbox title="Refrigeration required. Package must be package must be packed in ice prior to driver pickup." />
          </div>
          <div className={style.checkboxItemMedication}>
            <Checkbox title="Contains hazardous medications. Package will be handled with care." />
          </div>
          <div className={style.checkboxItemMedication}>
            <Checkbox title="Signature is required for this delivery." />
          </div>
          <div className={style.checkboxItemMedication}>
            <Checkbox title="Okay to leave at door / front office. NOTE: Selecting this option will override signature requireement if no one is available to receive the package." />
          </div>

          <h3>Pickup Request Time</h3>
          <div className={classes3}>
            <Label2
              title="Estimated For Pickup"
              type="text"
              src="/images/calendar.svg"
            />
            <Label2
              title="Estimated For Dropoff"
              type="text"
              src="/images/calendar.svg"
            />
          </div>
          <h3>Pickup Request Time</h3>
          <div className={style.wrapInformation}>
            <Label3
              title="Estimated For Dropoff"
              type="text"
              src="/images/arrowdownsvg.svg"
            />
            <Label title="Length (Inch)" type="text" />
            <Label title="Width (Inch)" type="text" />
            <Label title="Height (Inch)" type="text" />
            <Label title="Weight (LBS)" type="text" />
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default OrderPages;
