import { BidInterface } from 'interfaces/bid';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { FreelancerInterface } from 'interfaces/freelancer';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  budget?: number;
  deadline?: any;
  company_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  freelancer?: FreelancerInterface;
  _count?: {
    bid?: number;
    review?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
  freelancer_id?: string;
}
