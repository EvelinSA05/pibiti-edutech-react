import CardList from '../components/card/CardList';

function MentorsPage({ mentorsData }) {
  return (
    <CardList
      title="Para Mentor Study Buddy"
      items={mentorsData}
      itemType="mentor"
    />
  );
}

export default MentorsPage;

