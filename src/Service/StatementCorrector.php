<?php

declare(strict_types=1);

namespace App\Service;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class StatementCorrector extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('corrector', [$this, 'formatString']),
        ];
    }

    public function formatString(string $string)
    {
        $string = html_entity_decode($string);
        return $string;
    }
}