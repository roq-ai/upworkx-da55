import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating?: number;
  feedback?: string;
  project_id: string;
  reviewer_id: string;
  reviewee_id: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  user_review_reviewer_idTouser?: UserInterface;
  user_review_reviewee_idTouser?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  feedback?: string;
  project_id?: string;
  reviewer_id?: string;
  reviewee_id?: string;
}
