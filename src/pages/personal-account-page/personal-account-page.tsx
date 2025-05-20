import { AccountCard } from "@widgets/account-card";
import styles from "./style.module.css";
import PageTitle from "@components/page-title/page-title";
import { BookingsCard } from "@widgets/booking-card";
import { PromocodeCard } from "@widgets/promocode-card";
import SettingsCard from "@components/settings-card/settings-card";
import profileSettingsIcon from '@assets/profile-settings.png';
import securitySettingsIcon from '@assets/security-settings.png';
import bankSettingsIcon from '@assets/bank-settings.png';
import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import EditProfileForm from "@components/edit-profile-form/edit-profile-form";
import SecurityCard from "@components/security-card/security-card";

type PageTabs = 'bookings' | 'edit-profile' | 'security' | 'cards';

function PersonalAccountPage() {

  /* const [openedTab, setTab] = useState<'bookings' | 'profile' | 'security' | 'cards'>('bookings'); */
  const location = useLocation();
  const openedTab = useMemo(() => location.pathname.split('/')[2], [location.pathname]);

  return (
    <section className={styles.page}>
      <PageTitle text="Личный кабинет" />
      <div className={styles.mainCards}>
        {/* account */}
        {openedTab !== 'security' && <AccountCard id={777777} userName="ABOBA" />}
        {/* bronirovki */}
        {openedTab === 'bookings' && <BookingsCard />}
        {/* promo */}
        {openedTab === 'bookings' && <PromocodeCard />}
        {/* edit profile */}
        {openedTab === 'edit-profile' && <EditProfileForm />}
        {openedTab === 'security' && <SecurityCard />}
      </div>
      <div className={styles.settingsWrapper}>
        <h3 className={styles.settingsTitle}>Настройки</h3>
        <div className={styles.settingsCards}>
          {/* 3 cards - profile, security, bank */}
          <SettingsCard img={profileSettingsIcon} title="Профиль" par="Редактировать личную информацию" link='/personal-account/edit-profile' />
          <SettingsCard img={securitySettingsIcon} title="Безопасность" par="Изменить пароль или завершить сеанс" link='/personal-account/security' />
          <SettingsCard img={bankSettingsIcon} title="Банковские карты" par="Безопасность платежей и защита данных" link='/personal-account/cards' />
        </div>
      </div>
    </section>
  );
}

export default PersonalAccountPage;
