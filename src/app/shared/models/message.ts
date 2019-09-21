type MessageReceivedType = "Junk" | "Starred";
export interface Message {
  id: number,
  from: string,
  fromName: string,
  to: string,
  toName: string,
  subject: string,
  body: string,
  team: string,
  time: string,
  type: MessageReceivedType,
  suggestion: string,
  imgSource: string,
}
