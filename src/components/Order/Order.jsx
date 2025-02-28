import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import YandexMap from "../YandexMap/YandexMap";
import { useNavigate } from "react-router-dom";
import ModalWrapper from "../ModalWrapper";
import "./Order.scss";
import { useTranslation } from "react-i18next";
const regions = {
  toshkent: ["Chilonzor", "Yunusobod", "Shayxontohur"],
  samarqand: ["Urgut", "Narpay", "Jomboy"],
  fergana: ["Marg'ilon", "Qo'qon", "Rishton"],
  buxoro: ["G'ijduvon", "Vobkent", "Peshku"],
  navoiy: ["Zarafshon", "Nurota", "Karmana"],
};

function Order() {
  const {t} = useTranslation()
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();
  const [districts, setDistricts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [priceCard, setPriceCard] = useState(0);
  const selectedRegion = watch("region");
  const selectedDistrict = watch("district");
  const [deliveryPrice2, setDeliveryPrice2] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setValue("region", region);
    setValue("district", "");
    setDistricts(region ? regions[region] : []);
  };

  const onSubmit = (data) => {
    console.log("Form ma'lumotlari:", data);
    setIsModalOpen(true);
    reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedRegion && selectedDistrict) {
      setDeliveryPrice2(30000);
    } else {
      setDeliveryPrice2(null);
    }
  }, [selectedRegion, selectedDistrict]);

  return (
    <div className="order">
      <div className="container">
        <h2>{t("order.Buyurtmanirasmiylashtirish")}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="order-content">
          <div className="order-content-form">
            <div className="input-label">
              <label>
                {t("order.ism")} <span>*</span>
              </label>
              <input
                {...register("firstName", {
                  required: "Ism kiritilishi shart",
                })}
                className="input-field"
              />
              {errors.firstName && (
                <span className="error">{errors.firstName.message}</span>
              )}
            </div>
            <div className="input-label">
              <label>
                {t("order.familya")} <span>*</span>
              </label>
              <input
                {...register("lastName", {
                  required: "Familiya kiritilishi shart",
                })}
                className="input-field"
              />
              {errors.lastName && (
                <span className="error">{errors.lastName.message}</span>
              )}
            </div>
            <div className="form-fullname">
              <div className="input-label">
                <label htmlFor="phone">
                  {t("order.Telefon")}  <span>*</span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: { value: true, message: "Telefon" },
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"uz"}
                      masks={{ uz: "(..) ...-..-.." }}
                      inputClass="phone-input-field"
                      containerClass="phone-input-container"
                      inputStyle={{ paddingLeft: "50px" }}
                    />
                  )}
                />
                {errors.phone && (
                  <span className="error">{errors.phone.message}</span>
                )}
              </div>
            </div>
            <div className="input-label">
              <label>
                {t("order.Viloyat")}  <span>*</span>
              </label>
              <select
                {...register("region", { required: "Viloyat tanlang" })}
                onChange={handleRegionChange}
                className="input-field"
              >
                <option value="">{t("order.Viloyatnitanlang")} </option>
                {Object.keys(regions).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errors.region && (
                <span className="error">{errors.region.message}</span>
              )}
            </div>
            <div className="input-label">
              <label>
                {t("order.Shahar")}  <span>*</span>
              </label>
              <select
                {...register("district", { required: "Shahar tanlang" })}
                className="input-field"
              >
                <option value="">{t("order.Shaharnitanlang")}</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.district && (
                <span className="error">{errors.district.message}</span>
              )}
            </div>
            <YandexMap />
            <div className="order-button">
              <button type="submit" onClick={() => setIsModalOpen(true)}>
                {t("order.Buyurtmaniyuborish")} 
              </button>
              <button onClick={() => navigate(-1)}>{t("orqaga")} Ortga</button>
            </div>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <ModalWrapper
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Buyurtma qabul qilindi"
        >
          <p>
            {t("order.sucsess")} 
          </p>
          <button onClick={() => setIsModalOpen(false)}>
            {t("order.Yopish")} 
          </button>
        </ModalWrapper>
      )}
    </div>
  );
}

export default Order;
