import car from "../../assets/images/vehicles/car.jpg";
import moto from "../../assets/images/vehicles/motorcycle.jpg";
import excavator from "../../assets/images/vehicles/excavator.jpg";
import bus from "../../assets/images/vehicles/bus.jpg";
import boat from "../../assets/images/vehicles/boat.jpg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightWhite from "../../assets/icons/arrow-right-white.svg";
import styles from "./VehicleCollateral.module.scss";

function VehicleCollateral() {
  const vehicles = [
    {
      id: 1,
      img: car,
      title: "Автомобили",
      link: "#",
      textColor: "#fff",
      arrow: arrowRightWhite,
    },
    {
      id: 2,
      img: moto,
      title: "Мототехнику",
      link: "#",
      textColor: "#424242",
      arrow: arrowRight,
    },
    {
      id: 3,
      img: excavator,
      title: "Спецтехнику",
      link: "#",
      textColor: "#424242",
      arrow: arrowRight,
    },
    {
      id: 4,
      img: bus,
      title: "Автобус",
      link: "#",
      textColor: "#fff",
      arrow: arrowRightWhite,
    },
    {
      id: 5,
      img: boat,
      title: "Водный транспорт",
      link: "#",
      textColor: "#424242",
      arrow: arrowRight,
    },
  ];

  const vehiclesMap = vehicles.map((item) => {
    return (
      <div
        key={item.id}
        className={styles["vehicles__item"]}
        style={{ color: item.textColor, backgroundImage: `url(${item.img})` }}
      >
        <h4 className={styles["vehicles__title"]}>{item.title}</h4>
        <a
          href={item.link}
          className={styles["vehicles__link"]}
          style={{ color: item.textColor }}
        >
          Подробнее <img src={item.arrow} alt="arrow" />
        </a>
      </div>
    );
  });

  return (
    <div className={styles["vehicles"]}>
      <div className="small-container">
        <div className={styles["vehicles__inner"]}>{vehiclesMap}</div>
      </div>
    </div>
  );
}

export default VehicleCollateral;
