export class CreateOrderDto {
  completed: boolean;
  cancelled: boolean;
  kitchen_cancelled: boolean;
  kitchen_accepted: boolean;
  kitchen_dispatched: boolean;
  kitchen_dispatched_time: string;
  completed_time: string;
  rider_id: number;
  kitchen_prepared: boolean;
  rider_assigned: boolean;
  paid: boolean;
  order_code: number;
  order_change: string;
  calculated_order_id: number;
  kitchen_verified_time: string;
  kitchen_completed_time: string;
  shop_accepted: boolean;
  shop_prepared: boolean;
  no_of_mealbags_delivered: number;
  no_of_drinks_delivered: number;
  rider_started_time: string;
  rider_started: boolean;
  rider_arrived_time: string;
  rider_arrived: boolean;
  is_failed_trip: boolean;
  failed_trip_details: any;
  box_number: number;
  shelf_id: number;
  user_id: number;
}
