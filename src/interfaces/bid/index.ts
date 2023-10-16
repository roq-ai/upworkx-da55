import { FreelancerInterface } from 'interfaces/freelancer';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface BidInterface {
  id?: string;
  freelancer_id: string;
  project_id: string;
  amount?: number;
  proposed_completion_date?: any;
  message?: string;
  created_at?: any;
  updated_at?: any;

  freelancer?: FreelancerInterface;
  project?: ProjectInterface;
  _count?: {};
}

export interface BidGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  project_id?: string;
  message?: string;
}
