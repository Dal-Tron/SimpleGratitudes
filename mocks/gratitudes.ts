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
];
