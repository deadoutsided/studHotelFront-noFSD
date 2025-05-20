import DormentoryImgItem from "@components/dormentory-img-item/dormentory-img-item";
import styles from "./style.module.css";
import { Link } from "react-router";
import AdminPageTitle from "@components/page-title/admin-page-title/admin-page-title";
import { useGetRequestsQuery } from "@lib/store/api/eventsApi";
import BookingRequestCard from "@components/booking-request-card/booking-request-card";

function AdminBookingRequestPage() {
  const { data, error, isLoading } = useGetRequestsQuery("");

  return (
    <section className={styles.page}>
      <AdminPageTitle text="Заявки на бронирование" />
      <div className={styles.requestsList}>
        {!isLoading &&
          data !== undefined &&
          data.map((el) => {
            return (
              <BookingRequestCard
                id={el._id}
                key={el._id}
                roomType={el.roomType}
                rooms={el.rooms}
                dates={el.dates}
                comment={el.comment}
                invitedPerson={el.invitedPerson}
                vistitPurpose={el.vistitPurpose}
                requestAuthor={el.requestAuthor}
                phoneNumber={el.phoneNumber}
                email={el.email}
                requestStatus={el.requestStatus}
                personalDataAgree={el.personalDataAgree}
              />
            );
          })}
      </div>
    </section>
  );
}

export default AdminBookingRequestPage;
