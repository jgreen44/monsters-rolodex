import { IEvent } from '../../types';

export interface ISearchBox {
  onChangeHandler: (event: IEvent) => void;
  placeholder: string;
  className: string;
}
