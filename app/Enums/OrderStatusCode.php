<?php

declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class OrderStatusCode extends Enum
{
    const CREATED = 1;
    const SAVED = 2;
    const APPROVED = 3;
    const VOIDED = 4;
    const COMPLETED = 5;
    const PAYER_ACTION_REQUIRED = 6;
}
