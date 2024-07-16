export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export function userFullName(obj: IUser): string {
  // Return the full name with a space in between first name and last name.
  return `${obj.firstName} ${obj.lastName}`;
}
