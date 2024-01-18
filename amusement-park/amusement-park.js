/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    "name": name,
    "age": age,
    "ticketId": ticketId,
  }
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  if (visitor.ticketId !== null) {
   visitor.ticketId = null;
  }
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */

/*
before sale = ticketId  === null
when sold = visitor name is added as value of the ticket KEY]

IF key = missing = unknown ticket id
IF Key = null = not sold
IF KEY && VALUE have a name, say sold to X name
*/
export function ticketStatus(tickets, ticketId) {
  const ticketInfo = tickets[ticketId];

  if (ticketInfo === null) return "not sold";
  if (ticketInfo === undefined) return "unknown ticket id";

  return `sold to ${ticketInfo}`;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */

export function simpleTicketStatus(tickets, ticketId) {
  const ticketInfo = tickets[ticketId];

  if (ticketInfo === null || ticketInfo === undefined) return 'invalid ticket !!!'

  return ticketInfo;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */

// if the gtc is != undefined, return it (gtc.version)

export function gtcVersion(visitor) {
  if (visitor.gtc) return visitor.gtc.version;
}
