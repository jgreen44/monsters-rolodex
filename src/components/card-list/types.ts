import { IEvent } from '../../types';

export interface IMonster {
  name: string;
  id: string;
}

export interface ICardList {
  monsters: Array<IMonster>;
}

export interface ISearchBox {
  onChangeHandler: (event: IEvent) => void;
  placeholder: string;
  className: string;
}
