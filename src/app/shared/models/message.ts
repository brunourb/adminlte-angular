type MessageReceivedType = "Junk" | "Starred" | "Trash" | "Delete";
export interface Message {
  id: number,
  from: string,
  fromName: string,
  to: string,
  toName: string,
  subject: string,
  body: string,
  fromTeam: string,
  toTeam: string,
  time: string,
  type: MessageReceivedType,
  suggestion: string,
  imgSource: string,
}