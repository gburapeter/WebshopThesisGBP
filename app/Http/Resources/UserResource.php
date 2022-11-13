<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  [
            'id' => $this->id,
            'firstname' => explode(" ", $this->name)[0],
            'lastname' => explode(" ", $this->name)[1],
            'phone' => $this->phone,
            'email' => $this->email
        ];
    }
}
