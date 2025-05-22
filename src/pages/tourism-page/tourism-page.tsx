import { AccountCard } from "@widgets/account-card";
import styles from "./style.module.css";
import PageTitle from "@components/page-title/page-title";
import { BookingsCard } from "@widgets/booking-card";
import { PromocodeCard } from "@widgets/promocode-card";
import SettingsCard from "@components/settings-card/settings-card";
import profileSettingsIcon from "@assets/profile-settings.png";
import securitySettingsIcon from "@assets/security-settings.png";
import bankSettingsIcon from "@assets/bank-settings.png";
import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import EditProfileForm from "@components/edit-profile-form/edit-profile-form";
import SecurityCard from "@components/security-card/security-card";
import EventCard from "@widgets/event-card/event-card";
import { dateToYYYYMMDD } from "@utils/time";

function TourismPage() {

  const [selectedDate, setSelectedDate] = useState(dateToYYYYMMDD(new Date()))

  return (
    <section className={styles.page}>
      <PageTitle
        text="СтудИнфо, много всего интересного"
        aditionalStyle={styles.pageTitle}
      />
      <div className={styles.dateSelect}>
        <p>Выберите дату:</p>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </div>
      <div className={styles.eventsWrapper}>
        <EventCard
          title="Программа «Весна на Псковском проспекте»"
          dateTime="С 7 апреля по 31 мая 2025"
          image="https://temryuk.ru/upload/resize_cache/iblock/19f/920_540_2/19f0b10a83b99cfec364a7e9e44b009b.jpeg"
          link="https://www.culture.ru/events/5661071/programma-vesna-na-pskovskom-prospekte?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Выставка «Вкус хвои и хлеба»"
          dateTime="С 30 апреля по 15 июля 2025"
          image="https://monuments.karelia.ru/assets/News/Petrozavodsk/DK-OTZ.JPG"
          link="https://www.culture.ru/events/5365414/vystavka-vkus-khvoi-i-khleba?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Выставка «Дом Коммерческого собрания»"
          dateTime="С 2 сентября 2024 по 30 января 2026"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oOLM6EA5TiC_I9Q8ctW4dPaE7Jym2trplQ&s"
          link="https://www.culture.ru/events/5727347/konkurs-shtrikhi-k-portretu-loshadi?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Конкурс «Штрихи к портрету лошади»"
          dateTime="С 28 апреля по 5 сентября 2025"
          image="https://goarctic.ru/upload/novosty_two/IMG20240908112406.jpg"
          link="https://www.culture.ru/events/4867440/vystavka-dom-kommercheskogo-sobraniya?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Экскурсия «История губернского города в жизни одной улицы»"
          dateTime="С 12 февраля 2025 по 27 февраля 2026"
          image="https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/49f19a31-d855-41c2-92ca-cbcbc6d8033e/-/scale_crop/630x420/center/-/quality/best/"
          link="https://www.culture.ru/events/5425270/ekskursiya-istoriya-gubernskogo-goroda-v-zhizni-odnoi-ulicy?location=arhangelskaya-oblast-arhangelsk"
        />
      </div>
    </section>
  );
}

export default TourismPage;
