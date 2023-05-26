import { Model } from 'objection';

export class BaseModel extends Model {
  readonly id: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}
