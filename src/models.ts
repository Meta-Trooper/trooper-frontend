export type Gamer = {
  id: string;
  username: string;
  date_created: string;
  profile_type: string;
  birthdate: string;
  description: string;
  location: string;
  name_discord?: string;
  link_twitter?: string;
  link_linkedin?: string;
  link_facebook?: string;
  min_hour_rate?: string;
  hours_per_day?: string;
  total_earned?: string;
  favorite_games: string;
  favorite_roles: string;
};

export type Jobs = {
  id: string;
  job_name: string;
  date_created: string;
  short_description: string;
  description: string;
  game_id: number;
  job_state: string;
  payment_amount: string;
  duration: number;
  recruiter_id: string;
  chosen_gamer_id: string;
  roles: string;
  applicants?: any;
  asked_gamers?: any;
};
