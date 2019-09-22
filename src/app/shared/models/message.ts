type MessageType = "Junk" | "Starred" | "Trash";
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
  type: MessageType,
  toType: MessageType,
  fromType: MessageType,
  suggestion: string,
  imgSource: string,
  toStatus: string,
  fromStatus: string 
}