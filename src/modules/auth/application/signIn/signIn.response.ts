import { ApiProperty } from '@nestjs/swagger';

export class SignInResponse {
  @ApiProperty({
    description: 'Access token',
    example:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1CMk1BeUtTbjU1NWlzZDBFYmRoS3g2bmt5QWk5eExxOHJ2Q0ViX25PeVkifQ.eyJpc3MiOiJodHRwczpcL1wvc2xhY2suY29tIiwic3ViIjoiVTAzQ01QTU0wTEQiLCJhdWQiOiIyNjk3MjIyNzkxLjU4MDc4OTEwNzQzMzkiLCJleHAiOjE2OTMzNjY3NDEsImlhdCI6MTY5MzM2NjQ0MSwiYXV0aF90aW1lIjoxNjkzMzY2NDQxLCJub25jZSI6IiIsImF0X2hhc2giOiJkLVdJX2pHVGU4T0hrb3FIMHI2R2JRIiwiaHR0cHM6XC9cL3NsYWNrLmNvbVwvdGVhbV9pZCI6IlQwMkxINkpQOSIsImh0dHBzOlwvXC9zbGFjay5jb21cL3VzZXJfaWQiOiJVMDNDTVBNTTBMRCIsImVtYWlsIjoibmd1eWVuX3RyYW5AZGF0YWhvdXNlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJkYXRlX2VtYWlsX3ZlcmlmaWVkIjoxNjUwODg3MjMxLCJsb2NhbGUiOiJlbi1VUyIsIm5hbWUiOiJOZ3V5ZW4gVHJhbiIsInBpY3R1cmUiOiJodHRwczpcL1wvYXZhdGFycy5zbGFjay1lZGdlLmNvbVwvMjAyMy0wMy0xMVwvNDkyODYzODAyOTQ5NF8yZmZhNWI0MDNiY2U0NTJkMzA4MF81MTIuanBnIiwiZ2l2ZW5fbmFtZSI6Ik5ndXllbiIsImZhbWlseV9uYW1lIjoiVHJhbiIsImh0dHBzOlwvXC9zbGFjay5jb21cL3RlYW1fbmFtZSI6IkRhdGFIb3VzZSIsImh0dHBzOlwvXC9zbGFjay5jb21cL3RlYW1fZG9tYWluIjoiZGF0YWhvdXNlIiwiaHR0cHM6XC9cL3NsYWNrLmNvbVwvdGVhbV9pbWFnZV8yMzAiOiJodHRwczpcL1wvYXZhdGFycy5zbGFjay1lZGdlLmNvbVwvMjAxNS0xMi0wMlwvMTU4MTUxMDI0MzNfZWU2YjFhZTY2ODg0NWYxM2YwMGFfMzQuanBnIiwiaHR0cHM6XC9cL3NsYWNrLmNvbVwvdGVhbV9pbWFnZV9kZWZhdWx0IjpmYWxzZX0.XiuoIfk3Mwmfs4bL-tGuKu1FU0mUm3E1gjvkdm8IK1MTxY-4VMImFbDRvXW-oh7M57buOe11lmjK6IQHCFc9qW-j0tzbDTMFz6gmASq8lFjnY8Q0es_CLRmKO96f9olE45z8nxX7No2jfDbJ1zEXZsd8E4go-Y6siK7u2Qt3xNEVyVPyyB0-R94XrNIPiPUPmRrV9qpwNcFHmFgSaApvUOMdBQVbpyk20-q-zt75seOgi9o3VizqOC320KaDu_qQzPCDixh5aE5V029iAw1cP148-nUltIyRk2yI571-MQ0ZNPAXKL7iVQ7j-xISbMSX47mDpSM1cTpaT328ZPUsUA',
  })
  accessToken: string;
}
