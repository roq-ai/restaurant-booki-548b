import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { ReviewInterface } from 'interfaces/review';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  review?: ReviewInterface[];
  table?: TableInterface[];

  _count?: {
    menu?: number;
    reservation?: number;
    review?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  tenant_id?: string;
}
