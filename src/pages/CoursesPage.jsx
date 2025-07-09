import CardList from '../components/card/CardList';

function CoursesPage({ packagesData }) {
  return (
    <>
      <CardList
        title="Semua Paket Belajar"
        items={packagesData}
        itemType="course"
      />
    </>
  );
}

export default CoursesPage;