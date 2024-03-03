type GratitudeEntryProps = {
  id: string;
  gratitude: string;
  publicGratitude: boolean;
  userId: string;
  username: string;
};

class GratitudeEntry {
  id: string;
  gratitude: string;
  inserted_at: string;
  public: boolean;
  user_id: string;
  username: string;

  constructor({
    id,
    gratitude,
    publicGratitude,
    userId,
    username,
  }: GratitudeEntryProps) {
    this.id = id;
    this.gratitude = gratitude;
    this.inserted_at = new Date().toISOString();
    this.public = publicGratitude;
    this.user_id = userId;
    this.username = username;
  }
}

export const mockGratitudes = [
  new GratitudeEntry({
    id: '71',
    gratitude:
      'Grateful for the health and well-being of my family, especially during these challenging times.',
    publicGratitude: false,
    userId: 'user7',
    username: 'user7name',
  }),
  new GratitudeEntry({
    id: '81',
    gratitude:
      'Thankful for the opportunity to learn new things, whether it’s a new recipe, a different language, or understanding a complex concept.',
    publicGratitude: true,
    userId: 'user8',
    username: 'user8name',
  }),
  new GratitudeEntry({
    id: '1',
    gratitude: 'Grateful for the sunny weather today.',
    publicGratitude: true,
    userId: 'user1',
    username: 'user1name',
  }),
  new GratitudeEntry({
    id: '2',
    gratitude: 'Thankful for a good cup of coffee this morning.',
    publicGratitude: true,
    userId: 'user2',
    username: 'user2name',
  }),
  new GratitudeEntry({
    id: '3',
    gratitude: 'Appreciative of the support from my friends.',
    publicGratitude: false,
    userId: 'user3',
    username: 'user3name',
  }),
  new GratitudeEntry({
    id: '4',
    gratitude: 'Grateful for a relaxing weekend.',
    publicGratitude: true,
    userId: 'user4',
    username: 'user4name',
  }),
  new GratitudeEntry({
    id: '5',
    gratitude: 'Thankful for finishing a big project at work.',
    publicGratitude: false,
    userId: 'user5',
    username: 'user5name',
  }),
  new GratitudeEntry({
    id: '6',
    gratitude:
      'Feeling thankful for the little moments of joy throughout the day, like a smile from a stranger or the peacefulness of a quiet morning.',
    publicGratitude: true,
    userId: 'user6',
    username: 'user6name',
  }),
  new GratitudeEntry({
    id: '7',
    gratitude:
      'Grateful for the health and well-being of my family, especially during these challenging times.',
    publicGratitude: false,
    userId: 'user7',
    username: 'user7name',
  }),
  new GratitudeEntry({
    id: '8',
    gratitude:
      'Thankful for the opportunity to learn new things, whether it’s a new recipe, a different language, or understanding a complex concept.',
    publicGratitude: true,
    userId: 'user8',
    username: 'user8name',
  }),
  new GratitudeEntry({
    id: '9',
    gratitude:
      'Appreciating the beauty of nature around me, from the vibrant colors of flowers to the serene landscape of a forest.',
    publicGratitude: true,
    userId: 'user9',
    username: 'user9name',
  }),
  new GratitudeEntry({
    id: '10',
    gratitude:
      'Feeling grateful for having a supportive and loving partner who stands by me through thick and thin.',
    publicGratitude: false,
    userId: 'user10',
    username: 'user10name',
  }),
];
