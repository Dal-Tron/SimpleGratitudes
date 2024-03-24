export type TGratitude = {
  id: number;
  approved: boolean;
  gratitude: string;
  inserted_at: string;
  public: boolean;
  user_id: string;
};

interface GratitudeProfile {
  username: string;
}

export interface TGratitudeWithProfile extends TGratitude {
  profiles: GratitudeProfile;
}
