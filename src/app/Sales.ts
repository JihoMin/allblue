import { Observable } from "@firebase/util";

export interface Sales {
    curTime?: string;
    date?: string;
    description?: string;
    place?: string;
    price?: number;
    imageURL?: string;
    productName?: string;
    salesID?: string;
    time?: number;
    title?: string;
    userID?: string;
    tag1?: string; //
    tag2?: string; //
    tag3?: string; //
    joiner?: {
      joinerName?: string;
      userID?: string;
    }
  }

  // 서브 개념을 이렇게 표현해도 되나?