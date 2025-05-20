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
          image="https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2F12f14fae-eb62-5a49-ac92-5493871e433f%2Fw_884%2Ch_442%2Cc_fill%2Cg_center%2F0ec98eee9f295a4a28c9356fff740e91-jpg.webp&w=1080&q=75"
          link="https://www.culture.ru/events/5661071/programma-vesna-na-pskovskom-prospekte?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Выставка «Вкус хвои и хлеба»"
          dateTime="С 30 апреля по 15 июля 2025"
          image="https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2F1921dba6-3682-56c6-939e-c38ad0cc5195%2Fw_884%2Ch_442%2Cc_fill%2Cg_center%2F03c59dc597a500e73b0a3cbcb825e9be-jpg.webp&w=1080&q=75"
          link="https://www.culture.ru/events/5365414/vystavka-vkus-khvoi-i-khleba?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Выставка «Дом Коммерческого собрания»"
          dateTime="С 2 сентября 2024 по 30 января 2026"
          image="https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2F90c357b0-1d9c-50ab-b90d-acd5ff7c1f07%2Fw_884%2Ch_442%2Cc_fill%2Cg_center%2F038792e3caf8264b994894d628a0d876-jpg.webp&w=1080&q=75"
          link="https://www.culture.ru/events/5727347/konkurs-shtrikhi-k-portretu-loshadi?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Конкурс «Штрихи к портрету лошади»"
          dateTime="С 28 апреля по 5 сентября 2025"
          image="https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2Fbf16ec29-0e8e-597f-8a60-8250e24ba0e2%2Fw_884%2Ch_442%2Cc_fill%2Cg_center%2Fc0ba92e837f63d6fd517ec5dc98b8365-jpg.webp&w=1080&q=75"
          link="https://www.culture.ru/events/4867440/vystavka-dom-kommercheskogo-sobraniya?location=arhangelskaya-oblast-arhangelsk"
        />
        <EventCard
          title="Экскурсия «История губернского города в жизни одной улицы»"
          dateTime="С 12 февраля 2025 по 27 февраля 2026"
          image="https://www.culture.ru/_next/image?url=https%3A%2F%2Fcdn.culture.ru%2Fimages%2F0776e146-87d6-5f2c-aa27-58a19a7ade46%2Fw_884%2Ch_442%2Cc_fill%2Cg_center%2Fb43d3234822211d1ee05f047b9507ea2-jpg.webp&w=1080&q=75"
          link="https://www.culture.ru/events/5425270/ekskursiya-istoriya-gubernskogo-goroda-v-zhizni-odnoi-ulicy?location=arhangelskaya-oblast-arhangelsk"
        />
      </div>
    </section>
  );
}

export default TourismPage;
