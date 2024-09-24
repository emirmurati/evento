export type EventzEvent = {
  id: string;
  name: string;
  promoter: {
    name: string;
  };
  images: {
    url: string;
  }[];
  dates: {
    start: {
      dateTime: string;
    };
  };
};
