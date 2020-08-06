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
        $quote = '&quot;';
        $apostrophe = '&#039;';
        $apostrophe_1 = '&rsquo;';
        $e_accent = '&eacute;';
        $ampersand = '&amp;';
        $string = str_replace($quote, '"', $string);
        $string = str_replace($apostrophe, "'", $string);
        $string = str_replace($apostrophe_1, "'", $string);
        $string = str_replace($e_accent, "é", $string);
        $string = str_replace($ampersand, "&", $string);
        return $string;
    }
}