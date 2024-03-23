export type TProfile = {
  username: string;
};

export type TGratitude = {
  id: number;
  approved: boolean;
  gratitude: string;
  inserted_at: string;
  public: boolean;
  user_id: string;
  profiles: TProfile;
};

export type GratitudeProps = {
  className?: string;
  gratitude: TGratitude;
};
