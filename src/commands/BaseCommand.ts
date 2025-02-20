import type { Bot } from "@/types/Bot";

export abstract class BaseCommand {
  public readonly name: string;
  public readonly description?: string;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
  }

  /**
   * Execute the command.
   * @param bot - The mineflayer bot instance.
   * @param sender - The username of the player who sent the command.
   * @param args - Array of string arguments.
   */
  abstract execute(bot: Bot, sender: string, args: string[]): Promise<void>;
}
