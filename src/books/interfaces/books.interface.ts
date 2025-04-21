export interface IBook {
  id: string;
  title: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

export interface ICreateBook {
  title: string;
  description?: string;
  authors?: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}
