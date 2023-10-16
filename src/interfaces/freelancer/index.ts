import { BidInterface } from 'interfaces/bid';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerInterface {
  id?: string;
  user_id: string;
  skills?: string;
  experience?: number;
  portfolio_url?: string;
  hourly_rate?: number;
  availability?: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  project?: ProjectInterface[];
  user?: UserInterface;
  _count?: {
    bid?: number;
    project?: number;
  };
}

export interface FreelancerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  skills?: string;
  portfolio_url?: string;
  availability?: string;
}
