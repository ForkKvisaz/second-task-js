import {SecurityType} from '../interfaces';

export interface ISecuritySystemConfig {
  type: SecurityType;
}

export class SecuritySystem {
  public status: 'ok' | 'warning' | 'error' = 'ok';
  public enabled = false;
  public securitySystemNotCreated = true;
  private securitySystemType = SecurityType.MODERN;

  constructor(config?: Partial<ISecuritySystemConfig>) {
    if (config?.type) this.securitySystemType = config.type;
  }

  public enableSecuritySystem(): void {
    // код, который включает систему
  }

  public disableSecuritySystem(): void {
    // код, который выключает систему
  }

  public diagnosingSecuritySystem(): void {
    // код, который диагностирует систему

    this.pushStatusNotification();
  }

  protected pushStatusNotification(): void {
    switch (this.securitySystemType) {
      case SecurityType.PROFESSIONAL: {
        // код, который уведомляет пользователя на почту
        break;
      }
      case SecurityType.MODERN: {
        // код, который уведомляет пользователя на телефон
        break;
      }
      case SecurityType.AMATEUR: {
        // код, который уведомляет пользователя мелом на доске
        break;
      }
    }
  }
}
